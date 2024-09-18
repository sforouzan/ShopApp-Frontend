export default function FooterLinks( { title, links }) {
    
    const linksList = links.map(link => <li key={link}><a href="">{link}</a></li>)
    return (
    <div>
        <h3>{title}</h3>
        <ul>
            {linksList}
        </ul>
      </div>
    )
}