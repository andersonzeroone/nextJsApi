import fs from 'fs';
import path from 'path';

function handler(req, res) {

  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;


    const newFeedBack = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    }

    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);

    const data = JSON.parse(fileData);

    data.push(newFeedBack);

    fs.writeFileSync(filePath, JSON.stringify(data));

  } else {

    res.status(200).json({ message: 'this works!' });
  }

}

export default handler;