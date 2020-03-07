import React from "react"
import Title from "../../components/element/Title"
import Order from "../../components/element/Order"
import Copyright from "../../components/element/Copyright"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
  Grid,
  Typography,
  Box,
  Container,
  Paper,
  Link
} from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240,
    width: 240
  },
  blah: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "hidden"
  }
}))

const Blah = props => {
  const classes = useStyle()
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.title}
      </Typography>
      <Typography component="p" variant="h4" className={classes.blah}>
        {props.jumlah}
      </Typography>
      <div>
        <Link color="primary" href={props.url}>
          Lihat lebih
        </Link>
      </div>
    </React.Fragment>
  )
}

const component = props => {
  const classes = useStyle()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const date = new Date().toDateString()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
          >
            <Title>Dashboard</Title>
            <Typography variant="subtitle1">{date}</Typography>
          </Grid>
          <Grid
            style={{
              marginTop: 20
            }}
            container
            direction="row"
            justify="space-around"
            alignItems="baseline"
          >
            <Paper className={fixedHeightPaper}>
              <Blah title="Anggota" jumlah="14" url="/anggota" />
            </Paper>
            <Paper className={fixedHeightPaper}>
              <Blah title="Peminjam" jumlah="34" url="/peminjam" />
            </Paper>
            <Paper className={fixedHeightPaper}>
              <Blah title="Petugas" jumlah="124" url="/petugas" />
            </Paper>
            <Paper className={fixedHeightPaper}>
              <Blah title="Buku" jumlah="40" url="/buku" />
            </Paper>
          </Grid>
          <Grid
            style={{
              marginTop: 20
            }}
            item
            xs={12}
          >
            <Paper className={classes.paper}>
              <Order />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={2}>
          <Copyright>Tefa DDS</Copyright>
        </Box>
      </Container>
    </main>
  )
}

export default component
