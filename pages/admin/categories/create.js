import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import {RiLoader2Fill} from 'react-icons/ri';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreateCategory({ toast }) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    multiple: false,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div
      className="inline-flex rounded p-1 border box-border h-24 w-24 mr-1 mb-1"
      key={file.name}
    >
      <div className="flex overflow-hidden min-w-0">
        <Image
          src={file.preview}
          className="block w-auto h-full"
          height={100}
          width={100}
          alt="Thumb Image"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  const submit = async (values, actions) => {
    try {
      setTimeout(() => {
        toast.success("Category Created");
        actions.setSubmitting(false);
      }, 400);
    } catch (error) {
      console.error(error);
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <h1 className="font-bold text-xl pt-2 mb-5">Add Category</h1>

      <section className="text-gray-600 body-font relative">
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "Must be 2 characters or more")
              .max(50, "Must be 50 characters or less")
              .required("Name is required"),
          })}
          onSubmit={(values, actions) => {
            submit(values, actions);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      className={`w-full bg-gray-100 bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                        errors.name && touched.name
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* DropZone: Docs -> https://react-dropzone.js.org/#!/Basic%20example/1 */}
                <section className="p-2 w-full">
                  <div
                    {...getRootProps({
                      className:
                        "border border-dashed border-gray-300 rounded h-24 w-full flex justify-center items-center bg-gray-50",
                    })}
                  >
                    <input {...getInputProps()} />
                    <p>Drag an image or click to upload</p>
                  </div>
                  <aside className="mt-3 flex row">{thumbs}</aside>
                </section>
                {/* End DropZone */}

                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex items-center  mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    {isSubmitting && <RiLoader2Fill className="mr-1 animate-spin" /> }
                    Save
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}

export default CreateCategory;
