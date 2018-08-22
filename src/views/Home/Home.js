import React, { Component } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
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
  // Dropdown,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  // Progress,
  Row,
  Table,
  Tooltip,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
// import Widget03 from '../../views/Widgets/Widget03'
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
// Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as TooltipChart, Legend } from 'recharts';


// const brandPrimary = getStyle('--primary')
// const brandSuccess = getStyle('--success')
// const brandInfo = getStyle('--info')
// const brandWarning = getStyle('--warning')
// const brandDanger = getStyle('--danger')

// Recharts 

const data = [
  {name: '< 전체 콜 >', '타실 평균': 2500, 우리실: 1000},
  // {name: '< 타실 평균 >', '타실 평균': 3000, 우리실: 1398, amt: 2210},
];

const BarChart01 = () => {
  return (
    <BarChart 
      width={250} 
      height={350} 
      data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <TooltipChart/>
      <Legend />
      <Bar dataKey="우리실" fill="blue" />
      <Bar dataKey="타실 평균" fill="#f97d67" />
    </BarChart>
  );
};


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
                <Card className="p-2 opacity">
                    <strong className="h4 font-weight-bold" style={{margin:0}}>2.257</strong>
                </Card>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">유효 콜</div>
                <Card className="p-2 opacity">
                  <strong className="h4 font-weight-bold" style={{margin:0}}>10</strong>
                </Card>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">청약</div>
                <Card className="p-2 opacity">
                  <strong className="h4 font-weight-bold" style={{margin:0}}>196</strong>
                </Card>
              </Col>
              <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted text-left font-weight-bold">성공율</div>
                <Card className="p-2 opacity">
                  <strong className="h4 font-weight-bold" style={{margin:0}}>1.24%</strong>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="opacity">
                  <CardHeader className="clearfix" style={{backgroundColor: "transparent"}}>
                    <strong className="vertical-center float-left">오늘 실적 현황</strong>
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

                    <Table className="no-brdr" responsive>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
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
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Card>
              <BarChart01 />
              <CardBody>
                {/* <ButtonGroup>
                  <Button>1</Button>
                  <Button>2</Button>
                </ButtonGroup> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
