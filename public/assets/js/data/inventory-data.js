const searchBuildingElement = document.getElementById('search-building');
const searchBuildingElement2 = document.getElementById('search-building2');
const searchRoomElement = document.getElementById('search-room');
const searchRoomElement2 = document.getElementById('search-room2');

const updateOption = (rooms) => {
    searchRoomElement.innerHTML = "<option disabled selected> --Pilih--</option>";
    rooms.forEach(room => {
        searchRoomElement.innerHTML += `<option value="${room.id}">${room.nama_ruangan}</option>`;
    });
}

const updateOption2 = (rooms) => {
    searchRoomElement2.innerHTML = "<option disabled selected> --Pilih--</option>";
    rooms.forEach(room => {
        searchRoomElement2.innerHTML += `<option value="${room.id}">${room.nama_ruangan}</option>`;
    });
}

const getRoom = () => {
    searchRoomElement.innerHTML = "<option disabled selected>Loading ...</option>";

    const url = "/api/get-rooms";
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    let option = {
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": token
        },
        body: JSON.stringify({
            "building": searchBuildingElement.value,
        })
    };

    fetch(url, option)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            updateOption(responseJson.rooms);
        })
        .catch(error => {
            console.log(error);
        });
};

const getRoom2 = () => {
    searchRoomElement2.innerHTML = "<option disabled selected>Loading ...</option>";

    const url = "/api/get-rooms";
    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    let option = {
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": token
        },
        body: JSON.stringify({
            "building": searchBuildingElement2.value,
        })
    };

    fetch(url, option)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            updateOption2(responseJson.rooms);
        })
        .catch(error => {
            console.log(error);
        });
};

document.addEventListener('DOMContentLoaded', function () {
    searchBuildingElement.addEventListener('change', getRoom);
    searchBuildingElement2.addEventListener('change', getRoom2);
});
