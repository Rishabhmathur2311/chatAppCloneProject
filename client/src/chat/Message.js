import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormatDate } from "../utils/common-utils";
import { AccountContext } from "../context/AccountProvider";

const Own=styled(Box)`
margin: 4px;
background: #dcf8c6;
max-width: 60%;
display: flex;
margin-left: auto;
width: fit-content;
border-radius: 10px;
word-break: break-word;
padding: 5px;
`

const Wrapper=styled(Box)`
background: #fff;
max-width: 60%;
display: flex;
margin: 4px;
width: fit-content;
border-radius: 10px;
word-break: break-word;
padding: 5px;
`

const Text=styled(Typography)`
font-size: 14px;
padding: 0 25px 0 5px;
`

const Time=styled(Typography)`
font-size: 10px;
color: #919191;
margin-top: 4px;
word-break: keep-all;

`

const Message=({message})=>{

    const {account}=useContext(AccountContext);

    return (
        <>
        {
            account.sub===message.senderId?
        <Own>
            {
                message.type==='file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>
            }
        </Own>
        :
        <Wrapper>
            <Text>{message.text}</Text> 
           <Time>{FormatDate(message.createdAt)} </Time>
        </Wrapper>
        }
        </>
    );
}

const ImageMessage=({message})=>{
    return (
       <Box>
        {
        message?.text?.includes('.pdf')?
        <Box>
        </Box>
        :
        <img style={{width: 300, height: "100%", objectFit: "cover"}} src={message.url} alt={message.text}></img>
    }
       </Box> 
    );
}

const TextMessage=({message})=>{
    return (
        <>
        <Text>{message.text}</Text> 
           <Time>{FormatDate(message.createdAt)} </Time>
        </>
    );
}

export default Message;