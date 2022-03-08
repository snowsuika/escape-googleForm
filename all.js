function getDate() {
    let dateValue = document.getElementById('date').value;

    let year = dateValue.split('-')[0];
    let month = dateValue.split('-')[1];
    let date = dateValue.split('-')[2];

    document.querySelector('input[name="entry.650799372_year"]').value = year;
    document.querySelector('input[name="entry.650799372_month"]').value = month;
    document.querySelector('input[name="entry.650799372_day"]').value = date;
}

function getOtherItem() {
    let needChildChair = document.getElementById('needChildChair');
    let vegetableFood = document.getElementById('vegetableFood');
    let smokingZone = document.getElementById('smokingZone');

    if (needChildChair.checked) needChildChair.value = '需要兒童座椅';needChildChair.name = 'entry.901461210';
    if (vegetableFood.checked) vegetableFood.value = '素食餐點';vegetableFood.name = 'entry.901461210';
    if (smokingZone.checked) smokingZone.value = '吸煙區';smokingZone.name = 'entry.901461210';
}
