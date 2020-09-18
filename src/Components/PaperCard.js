import React from 'react'
import './PaperCard.css';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(40),
      height: theme.spacing(20),
    },
  },
}));

function PaperCard({ title, count, Icon, paperClass }) {
  const classes = useStyles();
  const formattingFn = (counts) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className={classes.root}>
      <Paper className={paperClass}>
        <div className={`paper_card`}>
          <div className="paper_card_title">
            {/* {Icon && <Icon className={`paper_card_title_icon`} />}  */}
            <h1>
              {/* {count && count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
              {count && <CountUp end={count}
                // onEnd={() => count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              />}
            </h1>
            <h3> {title}</h3>
          </div>
          <div className="paper_card_body">
            {/**Chart */}
            <Icon className="paper_card_title_icon" />
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default PaperCard
