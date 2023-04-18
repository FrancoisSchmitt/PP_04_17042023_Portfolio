import './index.css';
export default function Card(cardContent) {
      const { title, date, name, desc } = cardContent;

      return (
            <>
                  <div className="card-container">
                        <ul className="card-list">
                              <li>
                                    <h1>{title}</h1>
                              </li>
                              <li>
                                    <span>{date}</span> <small>{name}</small>
                              </li>
                              <li>
                                    <p>{desc}</p>
                              </li>
                        </ul>
                  </div>
            </>
      );
}
