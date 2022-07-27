import { Request, Response } from 'express';
import { Jobs } from '../models';

export const jobsController = {
  index: async (req: Request, res: Response) => {
    try {
      const jobs = await Jobs.findAll({ include: 'company' });

      return res.status(200).json({ message: jobs });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  save: async (req: Request, res: Response) => {
    const { title, description, limitDate, companyId } = req.body;
    try {
      const Job = await Jobs.create({
        title,
        description,
        limitDate,
        companyId
      })
      return res.status(201).json({ message: Job });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const job = await Jobs.findByPk(id, { include: 'company' });
      return res.status(200).json({ message: job })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { title, description, limitDate, companyId } = req.body;
    const { id } = req.params;

    try {
      const [, job] = await Jobs.update({
        title,
        description,
        limitDate,
        companyId
      }, {
        where: { id },
        returning: true,
      });

      return res.status(200).json({ message: job });
    } catch (err) {
      if(err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Jobs.destroy({ where: { id } });
      return res.json({ message: 'Jobs has succesfully deleted!' })
    } catch (err) {
      if(err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  }
}
