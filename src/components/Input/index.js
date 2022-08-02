import classes from './styles.module.css';

export const Input = (props) => {
  return(
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}
