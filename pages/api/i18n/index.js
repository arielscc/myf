import es from './es';
import en from './en';

export default function content(req, res) {
  const data = {
    es,
    en,
  };
  res.status(200).json(data);
}
