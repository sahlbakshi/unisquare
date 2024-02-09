import { NextApiRequest, NextApiResponse } from 'next';
import supabase from '@/modules/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      if (req.method == "GET") {
        const { email } = req.query
        let { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        res.status(200).json(user)
      } 
      else if (req.method == "POST") {
        const { email } = req.query
        const { name, avatarURL } = req.body
        await supabase.from('users').insert([
            { email: email, name: name,  avatarURL: avatarURL}
        ])
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
