import Card from '../../models/Card';

class CardActiveController {
  async index(req, res) {
    const cards = await Card.find({ active: true });
    return res.json(cards);
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});
    try {
      const card = await Card.findById(id);
      const card_active = card.active;
      if (!card_active) {
        return res.status(400).json({ error: 'Card disabled.' });
      }
      return res.json(card);
    } catch (e) {
      return res.status(404).json({});
    }
  }
}

export default new CardActiveController();
