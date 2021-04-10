import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)
    
    const users = [
        { id: 1, name: 'Dimas'},
        { id: 2, name: 'Priscilla'},
        { id: 3, name: 'Isabella'},
    ]

    return response.json(users)
}