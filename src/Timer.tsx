import React from "react"
import { format as formatDate } from "date-fns"

export const Days = (props: { now: Date }) => {
    const start = new Date("2020-11-07");
    const days = Math.floor((props.now.getTime() - start.getTime()) / (24 * 3600 * 1000))
    return (
        <div style={{
            color: "#ffac63", textAlign: "center", margin: "16px 0", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"
        }}>
            <div>今天是豆豆和鸟鸟在一起的第</div>
            <div style={{ fontSize: 72 }}>{days}天</div>
            <div>{formatDate(props.now, "HH时mm分ss秒")}</div>
        </div>
    )
}

export const Anniversary = (props: { now: Date }) => {
    const isTheDay = props.now.getMonth() === 10 && props.now.getDate() === 7;
    const year = props.now.getFullYear() + Number(props.now.getMonth() >= 10 && props.now.getDate() > 7)
    const nextAnniversary = new Date(`${year}-11-07`);
    const days = Math.floor((nextAnniversary.getTime() - props.now.getTime()) / (24 * 3600 * 1000))
    return (
        <div style={{ color: "#ec407a", textAlign: "center", margin: "16px 0", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div>2020/11/07 ❤ {formatDate(props.now, "yyyy/MM/dd")}</div>
            {props.now.getDate() === 7 ? <div>鸟鸟和豆豆在一起{(props.now.getFullYear() - 2020 - 1) * 12 + props.now.getMonth() + 2}个月啦</div> : null}
            <div>{isTheDay ? "今天是" : "距离"}豆豆和鸟鸟的{year - 2020}周年纪念日{isTheDay ? null : `还有${days}天`}！</div>
        </div>
    )
}