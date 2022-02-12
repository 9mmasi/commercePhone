import styledComponents from "styled-components"


export const ButtonContainer= styledComponents.button`
text-transform:Capitalize;
font-size:1.4rem;
background:transparent;
color:${props=>props.cart ? "var(--lightBlue)":"#ffa400"};
border:0.05px solid ${props=>props.cart ? "var(--lightBlue)":'#ffb703'};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props=>props.cart ? "#90e0ef" : props=>props.continue ? '#ffa400':'transparent'};
    
    border:0.5px solid ${props=>props.cart ? 'transparent':props=>props.continue ? 'transparent':'#90e0ef'};
    
    color:${props=>props.cart ? "#232528 ":props=>props.continue ?"#232528":'#ffa400'};
     
    
    
}&:focus{
    
}`
