import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
 
    const users = [
        { id: 1, name: 'Dimas'},
        { id: 1, name: 'Priscilla'},
        { id: 1, name: 'Isabella'},
    ]

    return response.json(users)
}