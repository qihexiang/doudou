if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
}
const CONSTANT = {
    day: 86400000, hour: 3600000, minute: 60000, second: 1000, millisecond: 1
}
const items = ['days', 'hours', 'minutes', 'seconds', 'milliseconds']
const start = new Date(2020, 10, 7)
let now = new Date()
const doc = {}
const funcs = {
    days: (future, past) => {
        const passed = future - past
        const days = (passed - passed % CONSTANT.day) / CONSTANT.day + 1
        return String(days)
    },
    hours: (future, past) => {
        const passed = (future - past) % CONSTANT.day
        const hours = (passed - passed % CONSTANT.hour) / CONSTANT.hour
        let result = String(hours);
        if (hours < 10) result = '0' + result
        return result
    },
    minutes: (future, past) => {
        const passed = (future - past) % CONSTANT.day % CONSTANT.hour
        const minutes = (passed - passed % CONSTANT.minute) / CONSTANT.minute
        let result = String(minutes)
        if (minutes < 10) result = '0' + result
        return result
    },
    seconds: (future, past) => {
        const passed = (future - past) % CONSTANT.day % CONSTANT.hour % CONSTANT.minute
        const seconds = (passed - passed % CONSTANT.second) / CONSTANT.second
        let result = String(seconds)
        if (seconds < 10) result = '0' + result
        return result
    },
    milliseconds: (future, past) => {
        const passed = (future - past) % CONSTANT.day % CONSTANT.hour % CONSTANT.minute % CONSTANT.second
        let result = String(passed)
        if (passed < 10) result = '0' + result
        if (passed < 100) result = '0' + result
        return result
    }
}
items.forEach(item => {
    doc[item] = document.getElementById(item)
    doc[item].innerText = funcs[item](now, start)
})
function update(item) {
    const oldValue = doc[item].innerText
    const newValue = funcs[item](now, start)
    if(Number(oldValue) >= Number(newValue)) {
        const itemIndex = items.indexOf(item)
        if(itemIndex != 0) {
            update(items[itemIndex - 1])
        } else {
            updateNow()
            anniversary()
            monthly()
        }
    }
    doc[item].innerText = newValue
}
const anniversary = () => {
    let anni
    if (now <= new Date(now.getFullYear(), 10, 8)) anni = new Date(now.getFullYear(), 10, 7)
    else anni = new Date(now.getFullYear() + 1, 10, 7)
    const lastDays = Number(funcs.days(anni, now)) - 1
    const years = anni.getFullYear() - start.getFullYear()
    const doc = document.getElementById("anniversary")
    if (lastDays == 0) {
        doc.innerHTML = `今天是豆豆和鸟鸟的<strong>${years}</strong>周年纪念日！`
    } else if (lastDays <= 14) {
        doc.innerHTML = `还有<strong>${lastDays}天</strong>就是豆豆和鸟鸟的<strong>${years}周年</strong>纪念日啦！`
    } else {
        doc.innerText = `距离豆豆和鸟鸟的${years}周年纪念日还有${lastDays}天！`
    }
}
const monthly = () => {
    if (now.getDate() == start.getDate()) {
        const fullYearMonths = (now.getFullYear() - start.getFullYear() - 1) * 12
        const restMonths = now.getMonth() + 2
        const doc = document.createElement('p')
        doc.innerText = `鸟鸟和豆豆在一起${fullYearMonths + restMonths}个月啦！`
        document.getElementById("footer").append(doc)
    }
}
const updateNow = () => {
    const nowDoc = document.getElementById("now")
    nowDoc.innerText = `${now.getFullYear()}/${now.getMonth() + 1 >= 10 ? String(now.getMonth() + 1) : '0' + String(now.getMonth() + 1)}/${now.getDate() >= 10 ? String(now.getDate()) : '0' + String(now.getDate())}`
}
updateNow()
anniversary()
monthly()
setInterval(() => {
    now = new Date()
    update('milliseconds')
}, 10)