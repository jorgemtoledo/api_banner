import * as Yup from 'yup';
import Card from '../../models/Card';

class CardController {
  async index(req, res) {
    const cards = await Card.find();
    return res.json(cards);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Error validation' });
    }

    const { title, description, active } = await Card.create(req.body);
    return res.json({
      title,
      description,
      active,
    });
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});
    try {
      const card = await Card.findById(id);
      return res.json(card);
    } catch (e) {
      return res.status(404).json({});
    }
  }

  async update(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});
    try {
      const card = await Card.findByIdAndUpdate(id, req.body, { new: true });
      return res.json(card);
    } catch (e) {
      return res.status(404).json({});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});
    try {
      await Card.findByIdAndRemove(id);
      return res.send();
    } catch (e) {
      return res.status(404).json({});
    }
  }
}

export default new CardController();
