const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundcolor: '#f0f0f0',
        color: 'pink'
    }
};

export function Avatar() {
const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
const description = 'Gregorio Y. Zara';
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
       <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}