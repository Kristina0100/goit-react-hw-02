import styles from "./Options.module.css"


const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
  return (
      <div className={styles.buttons}><button className={styles.button} onClick={()=> updateFeedback('good')} type="button">Good</button>
          <button className={styles.button} onClick={() => updateFeedback('neutral')} type="button">Neutral</button>
          <button className={styles.button} onClick={() => updateFeedback('bad')} type="button">Bad</button>
          {totalFeedback > 0 && (
              <button className={styles.button} type="button" onClick={resetFeedback}>Reset</button>
          )}
        </div>
  )
}


export default Options