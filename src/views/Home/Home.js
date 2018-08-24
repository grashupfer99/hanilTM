import React, { Component } from 'react';
import { Bar as MainBar, Line as MainLine, HorizontalBar } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Tooltip,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';

import { ResponsiveBar } from 'nivo';

import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
// Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as TooltipChart, Legend, LineChart as LineChart2, Line as Line2 } from 'recharts';
import { Chart, Axis, Series, Bar as Bar2, Tooltip as ToolTip2, Cursor, Line } from "react-charts";

// chart js data labels
import Datalabels from 'chartjs-plugin-datalabels';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Data Labels




// React Charts 2


// Main Chart
const horBarData = {
  labels: false,
  datasets: [
    {
      label: '우리실',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 0,
      // hoverBackgroundColor: 'transparent',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [2900],
      datalabels: {
        display: false
      }
    },
    {
      label: '타실 평균',
      backgroundColor: brandInfo,
      borderColor: 'yellowgreen',
      borderWidth: 0,
      // hoverBackgroundColor: 'transparent',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [2600],
      datalabels: {
        display: false
      }
    },
  ],
};

const horBarOptions = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  title: {
    display: true,
    text: '< 전체 콜 >',
    position: 'bottom'
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          color: '#ecebeb',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 12,
          fontColor: 'black',
          display: true,
          beginAtZero:true
          // min: 0,
          // max: 100,
          // stepSize: 20,
        },

      }],
    yAxes: [
      {
        display: true,
        ticks: {
          display: true,
          beginAtZero:true,
          // stepSize: 500 
        },
      }],
  },
    layout: {
      padding: {
        top: 5,
        right: 15,
        bottom: 5,
        left: 15
      }
    },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 3,
      hoverBorderWidth: 0,
    },
  },
}










//////
const data1 = [45,36,42,32,41,36,44,32,45];
const data2 = [40,40,40,40,40,40,40,40,40];


const mainChart = {
  labels: [1,2,3,4,5,6,7,8,9],
  datasets: [
    {
      label: '성공률',
      // backgroundColor: hexToRgba(brandInfo, 10),
      backgroundColor: 'transparent',
      // borderColor: brandInfo,
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
      datalabels: {
        align: 'bottom',
        anchor: 'center'
      },
    },
    {
      label: '평균 성곡률',
      radius: 0, // radius is 0 only for this dataset
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data2,
      datalabels: {
        display: false
        // align: 'right',
        // anchor: 'center'
      },
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, mainChart.datasets[0].data) - 5,
          max: Math.max.apply(Math, mainChart.datasets[0].data) + 5,
        },
      }],
  },
    // data labels
    plugins: {
      datalabels: {
        // backgroundColor: function(context){
        //   return context.dataset.backgroundColor;
        // },
        // borderRadius: 4,
        // color: 'red',
        // font: {
        //   weight: 'bold'
        // },
        formatter: function(value){
          return `${Math.round(value)}%`;
        },
        offset: 8
      }
    },
    layout: {
      padding: {
        top: 5,
        right: 15,
        bottom: 5,
        left: 15
      }
    },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 2,
    },
    point: {
      radius: 2,
      hitRadius: 10,
      hoverRadius: 3,
      hoverBorderWidth: 0,
    },
  },
};

/////////////

const newBar = {
  labels: ['전체콜', '유효콜', '청약'],
  datasets: [
    {
      label: '최근 30일 평균',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 0,
      // hoverBackgroundColor: 'transparent',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80],
      datalabels: {
        display: false
      }
    },
    {
      label: '오늘',
      backgroundColor: brandInfo,
      borderColor: 'yellowgreen',
      borderWidth: 0,
      // hoverBackgroundColor: 'transparent',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [25, 65, 50],
      datalabels: {
        align: 'right',
        anchor: 'end'
      }
    },
  ],
};

const newOptions = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 12,
          fontColor: 'black',
          min: 0,
          max: 100,
          stepSize: 20,
          callback: function(tick){
            return tick.toString() + '%'
          }
        },

      }],
    yAxes: [
      {
        display: true,
        ticks: {
          display: true,
        },
      }],
  },
    // data labels
    plugins: {
      datalabels: {
        formatter: function(value){
          return `${Math.round(value)}%`;
        },
        offset: 8
      }
    },
    layout: {
      padding: {
        top: 5,
        right: 15,
        bottom: 5,
        left: 15
      }
    },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 2,
    },
    point: {
      radius: 2,
      hitRadius: 10,
      hoverRadius: 3,
      hoverBorderWidth: 0,
    },
  },
}





// React Charts

const LineChart = () => {
  const data= [
    {
      label: "Series 1",
      data: [['', 2900], [1,2500]]
    },
    // {
    //   label: "Series 2",
    //   data: [[0, 3]]
    // }
  ];
  const colors = {
    bg: ['#5b9bd5','#ed7d31']
  }
  return (
<Chart data={data}>
  <Axis primary type="ordinal" />
  <Axis type="linear" min={0} max={0} stacked />
  <Series 
    getStyles={series => ({
      color: colors.bg[1]
    })}
    type={Bar2} />
  <Cursor primary />
  <Cursor />
  <ToolTip2 />
</Chart>
  );
}












// Recharts 


const NewBarChart = () => {
  const data = [
    {name: '< 전체 콜 >', 우리실: 2900, '타실 평균': 2650, },
    // {name: '< 타실 평균 >', '타실 평균': 3000, 우리실: 1398, amt: 2210},
  ];
  return (
    <BarChart 
      width={160} 
      height={240} 
      data={data}
      margin={{top: 40, right: 5, left: 5, bottom: 40}}>
      <CartesianGrid stroke="#f5f5f5"/>
      <XAxis dataKey="name" />
      <YAxis />
      <TooltipChart wrapperStyle={{color: "#666", fontSize: "12px"}}/>
      {/* <Legend /> */}
      <Bar type="monotone" dataKey="우리실" fill="#20a8d8"  barSize={15}/>
      <Bar type="monotone" dataKey="타실 평균" fill="#ffc107" barSize={15} />
    </BarChart>
  );
};


/////////////////////////

const TinyLineChart = () => {
  const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  return (
    <LineChart2 width={300} height={100} data={data}>
      <Line2 type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
    </LineChart2>
  );
}








// Not being used

// Tooltip item
// class TooltipItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       tooltipOpen: false,
//     };
//   }

//   toggle() {
//     this.setState({
//       tooltipOpen: !this.state.tooltipOpen,
//     });
//   }

//   render() {
//     return (
//       <span>
//           <Button className="mr-2 warning-tooltip" color="warning" id={'Tooltip-' + this.props.id}>
//           {this.props.item.text}
//         </Button>
//         <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
//           현재 발생한 청약 정보를 수동으로 입력합니다. (청약 자동 감지 불가시 이용) 청약 정보가 입력되면 스크린에 홈런 영상이 재생됩니다.
//         </Tooltip>
//       </span>
//     );
//   }
// }


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleToolTip = this.toggleToolTip.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      tooltipOpen: [false, false],
      // tooltips: [
      //   {
      //     placement: 'left',
      //     text: '?',
      //   }
      // ],
    };
  }

  toggleToolTip(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      tooltipOpen: newArray,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="6">
            {/*  */}
            <Row className="text-center">
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">전체 콜</div>
                <Card className="p-2 opacity earthian-shadow">
                    <strong className="h4 font-weight-bold" style={{margin:0}}>2.257</strong>
                </Card>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">유효 콜</div>
                <Card className="p-2 opacity earthian-shadow">
                  <strong className="h4 font-weight-bold" style={{margin:0}}>10</strong>
                </Card>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">청약</div>
                <Card className="p-2 opacity earthian-shadow">
                  <strong className="h4 font-weight-bold" style={{margin:0}}>196</strong>
                </Card>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">성공율</div>
                <Card className="p-2 opacity earthian-shadow">
                  <strong className="h4 font-weight-bold" style={{margin:0}}>1.24%</strong>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="opacity earthian-shadow">
                  <CardHeader className="clearfix" style={{backgroundColor: "transparent"}}>
                    <strong className="align-middle float-left">오늘 실적 현황</strong>
                    <span className="float-right">
                        <Button className="mr-2 warning-tooltip" color="warning" id="Tooltip-01">
                          ?
                        </Button>
                        <Tooltip 
                          placement="left" 
                          isOpen={this.state.tooltipOpen[0]} 
                          target="Tooltip-01" 
                          toggle={ () => {this.toggleToolTip(0);}}>
                          
                          현재 발생한 청약 정보를 수동으로 입력합니다. 
                          (청약 자동 감지 불가시 이용) 
                          청약 정보가 입력되면 스크린에 
                          홈런 영상이 재생됩니다.

                        </Tooltip>
                      <Badge className="mr-1 p-2" style={{backgroundColor:"#7030a0"}} color="primary" pill>
                        청약 정보 실시간 등록
                      </Badge>
                    </span>
                  </CardHeader>
                  <CardBody>

                    <Form action="" method="post" className="form-horizontal">
                      <FormGroup row>
                        <Col md="12" lg="6" className="ml-auto">
                          <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                              </InputGroupAddon>
                              <Input type="text" id="input1-group2" name="input1-group2" placeholder="이름" />
                          </InputGroup>
                        </Col>
                      </FormGroup>
                    </Form>

                    <Table className="no-brdr hoverBadges" responsive>
                      <thead>
                        <tr className="align-mid mute-text">
                          <th>No</th>
                          <th>사진</th>
                          <th>사용자 ID</th>
                          <th>이름 (Lv)</th>
                          <th>전체 콜</th>
                          <th>유효 콜</th>
                          <th>청약</th>
                          <th className="text-center">
                            청약 정보
                            <br /> 
                            실시간 등록
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="align-mid">
                          <td>1</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/19.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>2</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/52.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>3</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/97.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>4</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/42.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>5</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/16.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>6</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/58.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>7</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/53.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>8</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/12.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>9</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/99.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>10</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/85.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>11</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/19.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>12</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/52.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>13</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/97.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>14</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/42.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>15</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/16.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>16</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/58.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>17</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/53.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>18</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/women/12.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>19</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/99.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                        <tr className="align-mid">
                          <td>20</td>
                          <td>
                            <img 
                              src="https://randomuser.me/api/portraits/men/85.jpg"
                              alt="profile image"
                              className="rounded"
                              style={{ width: "50px" }}
                              style={{ height: "50px"}} />
                          </td>
                          <td>P00000001</td>
                          <td>홍길동(3)</td>
                          <td>65</td>
                          <td>3</td>
                          <td>2</td>
                          <td>
                            <Badge color="info custom-badge-01">청약</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col md="6">
            <Card className="earthian-shadow opacity">
              <CardHeader className="clearfix" style={{backgroundColor: "transparent"}}>
                <strong className="align-middle float-left">어제 실적 VS Another</strong>
                {/* <span className="float-right">
                  <div className="pr-3 chart-inner01">
                    <span className="chart-legend mr-1 mb-1 align-middle" style={{backgroundColor:"#20a8d8"}}></span>
                    우리실
                  </div>
                  <div className="chart-inner01">
                    <span className="chart-legend mr-1 align-middle" style={{backgroundColor:"#ffc107"}}></span>
                    타실 평균
                    </div>
                </span> */}
              </CardHeader>
              <CardBody>
                <Row className="text-center smallFont m-3">
                  <Col>  
                    <div className="chart-wrapper" style={{height: 140 + 'px'}}>
                      <HorizontalBar data={horBarData} options={horBarOptions} height={140}/>
                    </div>
                  </Col>
                </Row>
                <Row className="text-center smallFont m-3">
                  <Col>  
                    <div className="chart-wrapper" style={{height: 140 + 'px'}}>
                      <HorizontalBar data={horBarData} options={horBarOptions} height={140}/>
                    </div>
                  </Col>
                </Row>
                <Row className="text-center smallFont m-3">
                  <Col>  
                    <div className="chart-wrapper" style={{height: 140 + 'px'}}>
                      <HorizontalBar data={horBarData} options={horBarOptions} height={140}/>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <Row className="text-center smallFont">
                <Col>
                {/* <Col className="mb-sm-2 mb-0"> */}
                  {/* <NewBarChart /> */}
                  {/* <div className="chart-wrapper" style={{height:100+'px'}}>
                    <HorizontalBar data={horBarData} options={horBarOptions} height={90}/>
                  </div> */}
                {/* </Col> */}
                {/* <Col className="mb-sm-2 mb-0"> */}
                  {/* <NewBarChart /> */}
                  {/* <div className="chart-wrapper" style={{height:190}}>
                    <Bar data={horBarData} options={horBarOptions} height={180}/>
                  </div> */}
                {/* </Col>
                <Col className="mb-sm-2 mb-0"> */}
                  {/* <NewBarChart /> */}
                  {/* <div className="chart-wrapper" style={{height:190}}>
                    <Bar data={horBarData} options={horBarOptions} height={180}/>
                  </div> */}
                {/* </Col> */}
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <div className="chart-wrapper" style={{height:140}}>
                    <HorizontalBar data={horBarData} options={horBarOptions} height={130}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="chart-wrapper" style={{height:140}}>
                    <HorizontalBar data={horBarData} options={horBarOptions} height={130}/>
                  </div>
                </Col>
              </Row> */}
            </Card>

            <Row>
              <Col>
                <Card className="earthian-shadow opacity">
                  <CardHeader className="clearfix" style={{backgroundColor: "transparent"}}>
                    <strong className="align-middle float-left">최근 5일 컨디션</strong>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper m-4" style={{ height: 160 + 'px'}}>
                      <MainLine data={mainChart} options={mainChartOpts} height={150} />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card className="earthian-shadow opacity">
                  <CardHeader className="clearfix" style={{backgroundColor: "transparent"}}>
                    <strong className="align-middle float-left">오늘 실적 달성률</strong>
                    <span className="float-right">
                      <Button className="mr-2 warning-tooltip" color="warning" id="Tooltip2">
                        ?
                      </Button>
                      <Tooltip 
                        placement="left" 
                        isOpen={this.state.tooltipOpen[1]} 
                        target="Tooltip2" 
                        toggle={ () => {this.toggleToolTip(1);}}>    
                          최근 30일동안의 평균을
                          기준으로 오늘 실적의 달성
                          률을 표시합니다.
                      </Tooltip>
                    </span>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper" style={{ height: 190 + 'px'}}>
                      <HorizontalBar data={newBar} options={newOptions} height={190} />
                    </div>
                  </CardBody>
                  <CardFooter className="opacity">
                    <Row className="text-center smallFont">
                      <Col sm={12} md className="mb-sm-2 mb-0">
                        성공률
                      </Col>
                      <Col sm={12} md className="mb-sm-2 mb-0 font-weight-bold" style={{color:brandInfo, fontSize:"20px"}}>
                        1.54%
                      </Col>
                      <Col sm={12} md className="mb-sm-2 mb-0 font-weight-bold" style={{color:brandPrimary, fontSize:"20px"}}>
                        2.01%
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>


          </Col>

            
          {/* <Col md="6">
            <Card className="earthian-shadow opacity"> */}
            {/* <Col md="6" lg="6" style={{height: "350px"}}> */}
              {/* Nivo chart */}

            {/* <Row className="mx-4">  */}
              {/* <Col sm={12} md className="mb-sm-2 mb-0" style={{height: "350px"}}>
                <LineChart />
              </Col> */}

                        
              {/* <Col sm={12} md className="mb-sm-2 mb-0"  style={{height: "250px"}}>
              <LineChart />
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0 mx-4"  style={{height: "250px"}}>
              <LineChart />
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0"  style={{height: "250px"}}>
              <LineChart />
              </Col>
           
            </Row> */}

            {/* <Row className="text-center smallFont">
              <Col sm={12} md className="mb-sm-2 mb-0" style={{height: "350px"}}> */}
               {/* <ResponsiveBar
                data={
                  [
                    {
                      "country": "< 전체 콜 >",
                      "우리실": 2800,
                      "우리실Color": "hsl(336, 70%, 50%)",
                      "타실 평균": 2500,
                      "타실 평균Color": "hsl(133, 70%, 50%)",
                    }
                    // {
                    //   "country": "AE",
                    //   "pizza": 2500,
                    //   "pizzadogColor": "hsl(16, 70%, 50%)",
                    // },
                  ]
                }
                keys={[
                  "우리실",
                  "타실 평균",
              ]}
              indexBy="country"
              margin={{
                  "top": 50,
                  "right": 50,
                  "bottom": 50,
                  "left": 50
              }}
              
              groupMode="grouped"
              padding={0.5}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                  "orient": "bottom",
                  "tickSize": 0,
                  "tickPadding": 10,
                  "tickRotation": 0,
                  "legend": "",
                  "legendPosition": "center",
                  "legendOffset": 36
              }}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              // isInteractive={false}
              theme={{
                  "tooltip": {
                      "container": {
                          "fontSize": "13px"
                      }
                  },
                  "labels": {
                      "textColor": "#555"
                  }
              }}
          /> */}
{/* <ResponsiveBar
        data={
          [
            {
              "country": "AD",
              "burger": 18,
              "burgerColor": "hsl(138, 78%, 84%)",
            },
            {
              "country": "AE",
              "fries": 47,
              "friesColor": "hsl(203, 81%, 87%)",
            },
          ]
        }
        keys={[
            "burger",
            "fries",
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        colors="nivo"
        // colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
      
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "center",
            "legendOffset": 36
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "center",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 120,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemsSpacing": 2,
                "symbolSize": 20
            }
        ]}
        theme={{
            "tooltip": {
                "container": {
                    "fontSize": "13px"
                }
            },
            "labels": {
                "textColor": "#555"
            }
        }}
    />

              </Col>
            </Row>
             */}
 
              {/* <ResponsiveBar
                data={
                  [
                    {
                      "country": "< 전체 콜 >",
                      "우리실": 2800,
                      "우리실Color": "hsl(58, 70%, 50%)",
                      "타실 평균": 2500,
                      "타실 평균Color": "hsl(16, 70%, 50%)",
                    }
                    // {
                    //   "country": "AE",
                    //   "pizza": 2500,
                    //   "pizzadogColor": "hsl(16, 70%, 50%)",
                    // },
                  ]
                }
                keys={[
                  "우리실",
                  "타실 평균",
              ]}
              indexBy="country"
              margin={{
                  "top": 50,
                  "right": 50,
                  "bottom": 50,
                  "left": 50
              }}
              groupMode="grouped"
              padding={0.5}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                  "orient": "bottom",
                  "tickSize": 0,
                  "tickPadding": 10,
                  "tickRotation": 0,
                  "legend": "",
                  "legendPosition": "center",
                  "legendOffset": 36
              }}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              // isInteractive={false}
              theme={{
                  "tooltip": {
                      "container": {
                          "fontSize": "13px"
                      }
                  },
                  "labels": {
                      "textColor": "#555"
                  }
              }}
          />
          </Col>
          <Col md="6" lg="6" style={{height: "350px"}}>
              <ResponsiveBar
                data={
                  [
                    {
                      "country": "< 전체 콜 >",
                      "우리실": 2800,
                      "우리실Color": "hsl(58, 70%, 50%)",
                      "타실 평균": 2500,
                      "타실 평균Color": "hsl(16, 70%, 50%)",
                    }
                    // {
                    //   "country": "AE",
                    //   "pizza": 2500,
                    //   "pizzadogColor": "hsl(16, 70%, 50%)",
                    // },
                  ]
                }
                keys={[
                  "우리실",
                  "타실 평균",
              ]}
              indexBy="country"
              margin={{
                  "top": 50,
                  "right": 50,
                  "bottom": 50,
                  "left": 50
              }}
              groupMode="grouped"
              padding={0.5}
              borderColor="inherit:darker(1.6)"
              axisBottom={{
                  "orient": "bottom",
                  "tickSize": 0,
                  "tickPadding": 10,
                  "tickRotation": 0,
                  "legend": "",
                  "legendPosition": "center",
                  "legendOffset": 36
              }}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="inherit:darker(1.6)"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              // isInteractive={false}
              theme={{
                  "tooltip": {
                      "container": {
                          "fontSize": "13px"
                      }
                  },
                  "labels": {
                      "textColor": "#555"
                  }
              }}
          /> */}



            {/* </Col> */}


          {/* </Col> */}
        </Row>
      </div>
    );
  }
}

export default Dashboard;
