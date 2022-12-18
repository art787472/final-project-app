import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getText } from "~/models/text.server";

import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import { TextField, Box, Button, Typography } from "@mui/material";



import { useState } from "react";


export default function Index() {

  const [query, setQuery] = useState("")
  return (
    <Container sx={{padding: "2rem", paddingTop: "5rem"}} maxwidth="lg">
      <Typography variant="h3" sx={{textAlign: "center", mb:"2rem"}}>Project Syndicate 語料庫搜尋</Typography>
      <Box sx={{m:"0 auto", maxWidth:"30rem"}}>
        <form method="GET" action='/search'>
        <TextField fullWidth name="q" value={query} onChange={e => setQuery(e.target.value)} />
        <Box sx={{pt: '1rem', display:'flex', justifyContent:'center'}}>
        <Button variant='contained' type="submit">
          搜尋
        </Button>
        </Box>
        </form>
      </Box>
    </Container>
  );
}
