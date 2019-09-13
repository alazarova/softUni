function dayOfWeek(day){
    if(day == 'Monday') return 1
    if(day == 'Tuesday') return 2
    if(day == 'Wednesday') return 3
    if(day == 'Thursday') return 4
    if(day == 'Friday') return 5
    if(day == 'Saturday') return 6
    if(day == 'Sunday') return 7
    return 'error'

    // switch(day){
    //     case 'Monday': return 1
    //     case 'Tuesday': return 2
    //     case 'Wednesday': return 3
    //     case 'Thursday': return 4
    //     case 'Friday': return 5
    //     case 'Saturday': return 6
    //     case 'Sunday': return 7
    //     default: return "error"
    // }
}
console.log(dayOfWeek('Monday'))