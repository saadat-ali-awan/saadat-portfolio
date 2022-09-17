export default function handler(req: any, res: any) {
  res.status(200).json({
    url: 'https://docs.google.com/document/d/1C6JZBjJJIKpiwTBDFQ7xDTGz1YLppgzmrnOYx9yPXZo/export?format=pdf'
  });
}
