import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/modules/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method == "GET") {
      let { data: data } = await supabase
      .from('advisors')
      .select(`email, avatarURL, name, services(tag)`)
      res.status(200).json(data)
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
