export default function Footer(props) {
  return (<footer>
    <div>{props.buttonWasClicked ? "Success" : "Failure"}</div>
    {props.children}
  </footer>)
}