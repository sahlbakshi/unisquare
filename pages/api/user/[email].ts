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
        .single()
        res.status(200).json(user)
      } 
      else if (req.method == "POST") {
        const { email } = req.query
        const { name } = req.body
        await supabase.from('users').insert([
            { email: email, name: name}
        ])
        res.status(200).json('succesfully added new user')
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
