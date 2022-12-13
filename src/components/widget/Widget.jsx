import React from 'react'
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type}) {
    let data;
    const amount = 98;
    const diff = 100

    switch(type){
        default: case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' style={{ color: "crimson", background: "#b58a8a"}} />,
            };
            break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon: <ShoppingBagOutlinedIcon className='icon' style={{ color: "#8a8741", background: "#f5f5ce"}}/>,

                };
                break;
                case "earning":
                    data={
                        title:"EARNINGS",
                        isMoney: true,
                        link: "View net earnings",
                        icon: <PaidOutlinedIcon className='icon' style={{ color: "#48fa4b", background: "#cafacb"}} />,

                    };
                    break;
                    case "balance":
                        data={
                            title:"BALANCE",
                            isMoney: true,
                            link: "See details",
                            icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: "#3888ff", background: "#a1c7ff"}} />,
                        }
    }
  return (
    <div className="widget">
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>

        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/> {diff}%
            </div>
            {data.icon}
        </div>
    </div>
    )
}

export default Widget