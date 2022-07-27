import { Candidate } from "../models";

import { Request, Response } from 'express';

export const candidatesController = {
  index: async (req: Request, res: Response) => {
    try {
      const candidates = await Candidate.findAll();
      return res.json(candidates);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  save: async(req: Request, res: Response) => {
    const { name, bio, phone, email, openToWork } = req.body;
    
    try {
      const candidate = await Candidate.create({
        name,
        bio,
        phone,
        email,
        openToWork
      })

      return res.json({succesfully: candidate})
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }    
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const candidate = await Candidate.findByPk(id);

      if (!candidate) {
        throw new Error ('Usuario não existe!')
      }

      return res.json({ candidate });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, bio, phone, email, openToWork } = req.body;
    
    try {
      const [, candidate] = await Candidate.update({
        name,
        bio,
        phone,
        email,
        openToWork
      }, {
        where: { id },
        returning: true
      })

      return res.status(200).json({ message: candidate });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Candidate.destroy({ where: { id } })
     
      return res.status(200).json({ message: 'Usuario deletado com sucessso' })
    } catch (err) {
      if(err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  }
}
