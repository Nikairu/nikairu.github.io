import styled from "styled-components";

export const Title = styled.h2`
font-size: 42px;
color: inherit;
font-family: "Barlow";
padding-bottom: 18px;
margin: 0;
text-decoration: none;
font-weight: 600;
transition: 0.2s;

&.--hover {
    &:hover {
        color: #569358;
    }
}
`;

export const SubTitle = styled.h4`
font-size: 18px;
color: inherit;
font-family: "Barlow";
padding-bottom: 8px;
margin: 0;

&.pt-20 {
    padding-top: 20px
}
`;

export const Paragraph = styled.p`
font-size: 16px;
position: relative;
line-height: 24px;
font-family: "Barlow";
padding-bottom: 8px;
color: inherit;
margin: 0;
`;

export const ListItem = styled.p`
font-size: 16px;
position: relative;
padding-left: 16px;
font-family: "Barlow";
padding-bottom: 8px;
color: inherit;
margin: 0;

&:before{
    content: "";
    width: 6px;
    height: 6px;
    background-color: black;
    transform: rotate(45deg);
    position: absolute;
    top: 6px;
    left: 0;
}

strong{
    font-weight: bold;
}
`;

export const Button = styled.a`
min-width: 120px;
width: auto;
padding: 12px;
min-height: 30px;
display: flex;
letter-spacing: 0.09em;
border-radius: 4px;
cursor: pointer;
/* text-transform: uppercase; */
font-weight: 600;
font-family: "Barlow";
background-color: #56935800;
border: 2px solid #569358;
color: #569358;
transition: 0.2s;
justify-content: center;
align-items: center;
font-size: 16px;
text-decoration: none;

&.mt-auto{
    margin-top: auto;
}

&:hover {
background-color: #569358;
border: 2px solid #56935800;
color: #fff;
}

&.--raised{
    background-color: #569358;
    border: 2px solid #56935800;
    color: #fff;
    &:hover{
        background-color: #56935800;
        border: 2px solid #569358;
        color: #569358;
    }
}
`;