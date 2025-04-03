export default function CoreConceptItem({title, imagePath, description}: {title: string, imagePath?: string, description: string}): JSX.Element {
    return (
        <li>
          {imagePath ? <img src={imagePath} alt={title} /> : null}
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
    )
}