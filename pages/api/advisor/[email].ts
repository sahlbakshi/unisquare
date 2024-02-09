import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/modules/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method == "GET") {
        const { email } = req.query
        let { data: data } = await supabase
        .from('advisors')
        .select('*, services(tag, cost, details)')
        .eq('email', email)
        res.status(200).json(data) // join with services procided as well
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
