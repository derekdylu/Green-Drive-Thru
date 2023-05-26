import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Navigation from '../Components/Navigation/Navigation';
import { timberData } from '../Utils/TimberData';

const TRANSFORM_CONST = 8.8

const Portal = () => {
  const [currentTimber, setCurrentTimber] = useState(timberData[0])
  const [currentImport, setCurrentImport] = useState(0)
  const [timbers, setTimnbers] = useState([])

  const handleChangeTimber = (event) => {
    setCurrentTimber(event.target.value)
  }

  const handleChangeImport = (event) => {
    setCurrentImport(event.target.value)
  }

  const handleAddTimber = () => {
    if (timbers.find((item) => item.speciesName === currentTimber.speciesName)) {
      alert("木材已存在")
      return
    }
    const newTimeber = {
      "name": currentTimber.name,
      "speciesName": currentTimber.speciesName,
      "cf": currentTimber.cf,
      "import": currentImport,
      "reduction": Math.round((currentImport * TRANSFORM_CONST * currentTimber.cf) * 1000) / 1000,
    }
    setTimnbers([...timbers, newTimeber])
    setCurrentImport(0)
    setCurrentTimber(timberData[0])
  }

  const handleDeleteTimber = (index) => {
    const newTimbers = timbers.filter((item, i) => i !== index)
    setTimnbers(newTimbers)
  }

  return (
    <div style={{ background: "#e3e3e3", paddingBottom: "500px"}}>
      <Navigation />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        sx={{
          p: 3,
        }}
      >
        <>
          {
            timbers.length > 0 &&
            (
              <>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    p: 3,
                    m: 2,
                  }}
                  style={{ 
                    background: "#ffffff",
                    width: "340px",
                    borderRadius: "16px",
                  }}
                >
                  <Typography variant="h4">
                    ♻️
                  </Typography>
                  <Button variant="contained" color="primary" disabled sx={{ mb: 4}}>
                    建立完整的報告書
                  </Button>
                  <Typography variant="h4">
                    🪵
                  </Typography>
                  <Button variant="contained" color="primary" disabled>
                    什麼是負碳產品？
                  </Button>
                </Grid>
                <Grid
                  container
                  direction="column"
                  sx={{
                    p: 3,
                    m: 2,
                  }}
                  style={{ 
                    background: "#ffffff",
                    width: "340px",
                    borderRadius: "16px",
                  }}
                >
                  <Typography variant="h6">
                    透過使用國產木材
                  </Typography>
                  <Typography variant="h6">
                    一年為減少的CO2e約為
                  </Typography>
                  <Typography variant="h3">
                    {
                      Math.round(timbers.reduce((acc, cur) => acc + cur.reduction, 0))
                    } 公噸
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1}}>
                    約等於
                  </Typography>
                  <Typography variant="h3">
                    {
                      Math.round(timbers.reduce((acc, cur) => acc + cur.reduction, 0) / 4.6)
                    }
                  </Typography>
                  <Typography variant="h6">
                    輛汽車一年的CO2e
                  </Typography>
                </Grid>
              </>
            )
          }
        </>
        <>
          {
            timbers.map((item, index) => {
              return(
                <Grid
                  container
                  direction="column"
                  sx={{
                    p: 3,
                    m: 2,
                  }}
                  style={{ 
                    background: "#ffffff",
                    width: "340px",
                    borderRadius: "16px",
                  }}
                  key={index}
                >
                  <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
                    木材種類
                  </Typography>
                  <Typography variant="body1">
                    {item.name} {item.speciesName}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>
                    年進貨材積
                  </Typography>
                  <Typography variant="body1">
                    {item.import * 1000} BMF
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>
                    固碳效益
                  </Typography>
                  <Typography variant="body1">
                    {item.reduction} 公噸 CO2e
                  </Typography>
                  <Button variant="outlined" color="error" onClick={() => handleDeleteTimber(index)} sx={{ mt: 5.025 }}>移除</Button>
                </Grid>
              )
            })
          }
        </>
        <Grid
          container
          direction="column"
          sx={{
            p: 3,
            m: 2,
          }}
          style={{ 
            background: "#ffffff",
            width: "340px",
            borderRadius: "16px",
          }}
        >
          <Typography variant="h6">
            新增木材
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">木材種類</InputLabel>
            <Select
              value={currentTimber}
              label="treeType"
              onChange={handleChangeTimber}
            >
              {
                timberData.map((item, index) => {
                  return <MenuItem value={item} key={index}>{item.name}</MenuItem>
                })
              }
            </Select>
          </FormControl>
          <Typography variant="caption" sx={{ mt: 0.2 }}>
            {currentTimber ? currentTimber.speciesName : ""}
          </Typography>
          <TextField label="年進貨量 (材積；千 BMF)" variant="outlined" value={currentImport} onChange={handleChangeImport} sx={{ mt: 2 }} />
          <Button variant="contained" color="primary" onClick={() => handleAddTimber()} disabled={!(currentImport > 0)} sx={{ mt: 2 }}>新增</Button>
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ px: 7 }}>
        {(() => {
          let car = [];
          for (let i = 1; i <= Math.round(timbers.reduce((acc, cur) => acc + cur.reduction, 0) / 4.6); i++) {
            car.push(<>🚗</>);
          }
          return car;
        })()}
      </Typography>
    </div>
  )
}

export default Portal