import express, { json } from 'express';
import fetch from 'node-fetch';
import { requiresAuth } from 'express-openid-connect'; 

const app = express();


app.use(json());

app.post('/exchange-token', async (req, res) => {
  const code = req.body.code;

  const data = {
    grant_type: 'authorization_code',
    client_id: 'zY8RJBvSH4fsBTh26AiQyuw3EOVCKp60',
    client_secret: '3Cn968qxJZWKSMIVGgp7bINsoelYatxF2dSSaEDgTjsYvjaW-jPPNfNB8ST7XLi2',
    code,
    redirect_uri: 'http://localhost:3000/home',
  };

  try {
    const response = await fetch('https://your-auth0-domain/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const tokenData = await response.json();
   
      res.json(tokenData);
    } else {
  
      res.status(response.status).json({ error: 'Token exchange failed' });
    }
  } catch (error) {
   
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
