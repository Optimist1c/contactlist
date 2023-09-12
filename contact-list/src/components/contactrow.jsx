export default function ContactRow({contact}) {
return(
    <td>
    <tr>{contact.name}</tr>
    <tr>{contact.email}</tr>
    <tr>{contact.phone}</tr>
    </td>
);

}