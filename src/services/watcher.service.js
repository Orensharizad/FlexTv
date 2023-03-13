
import axios from 'axios'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'watcherDB'


export const watcherService = {
    query,
    getById,
    save,
    remove,
    getEmptyWatcher,
    requests

}

_createWatchers()


function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(watcherId) {
    return storageService.get(STORAGE_KEY, watcherId)
}

function remove(watcherId) {
    return storageService.remove(STORAGE_KEY, watcherId)
}

function save(watcher) {

    if (watcher._id) {
        return storageService.put(STORAGE_KEY, watcher)
    } else {
        watcher._id = utilService.makeId()
        return storageService.post(STORAGE_KEY, watcher)
    }
}

function getEmptyWatcher() {
    return {
        fullName: '',
        movies: ['Rambo', 'Rocky']
    }
}

function _createWatchers() {
    const watchers = [
        {
            _id: utilService.makeId(),
            fullName: 'Oren',
            movies: ['Rambo', 'Rocky']
        },
        {
            _id: utilService.makeId(),
            fullName: 'Shani',
            movies: ['Rambo', 'Rocky']
        },
        {
            _id: utilService.makeId(),
            fullName: 'Dave',
            movies: ['Rambo', 'Rocky']
        },
        {
            _id: utilService.makeId(),
            fullName: 'Sun',
            movies: ['Rambo', 'Rocky']
        },
        {
            _id: utilService.makeId(),
            fullName: 'Lee',
            movies: ['Rambo', 'Rocky']
        },
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchers))
}


function requests() {
    const API_KEY = '26df460e6ef2dfefd959e436f02342ec'

    return [
        {
            url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
            title: 'Netflix Movies',
            isLarge: true,
            _id: utilService.makeId()
        },
        {
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
            title: 'Romance Movies',
            isLarge: false,
            _id: utilService.makeId()


        },
        {
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
            title: 'Horror Movies',
            isLarge: false,
            _id: utilService.makeId()


        },
        {
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
            title: 'Comedy Movies',
            isLarge: false,
            _id: utilService.makeId()

        },

        {
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
            title: 'Top-Rate Movies',
            isLarge: false,
            _id: utilService.makeId()

        },
    ]

}

