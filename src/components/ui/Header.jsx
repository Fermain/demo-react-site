export default function Header(props) {
  const background = props.bg;
  const color = props.text;
  const padding = props.padding;

  return (
  <header style={{
    background,
    color,
    padding
  }}>
    {props.children}

    <button onClick={props.onClick}>Hey I'm a button</button>

    </header>)
}