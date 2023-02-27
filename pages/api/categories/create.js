import dbConnect from '../../../models/dbConnect';

export default async function handler(req, res) {
  // Check the Request Method
  if(req.method !== "POST") {
    res.status(400).json({ name: 'Invalid Request Method' })
  }
  
  await dbConnect();
  
  

  res.status(200).json(req.body);
}