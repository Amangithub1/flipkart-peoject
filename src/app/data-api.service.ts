import { Injectable } from "@angular/core";
import { DataService } from "./data.service";

@Injectable()
export class DataApiService {
  constructor(private data: DataService) {}

  getAllMobiles() {
    return this.data.mobiles;
  }
  getMobileById(id: number) {
    return this.data.mobiles.filter(m => m.id === id);
  }
  getAllMobileAccs() {
    return this.data.mobileAccs;
  }
  getMobileAccById(id: number) {
    return this.data.mobileAccs.filter(m => m.id === id);
  }
  getAllSpeakers() {
    return this.data.speakers;
  }
  getSpeakerById(id: number) {
    return this.data.speakers.filter(m => m.id === id);
  }
  getAllComputerAccs() {
    return this.data.computerAccs;
  }
  getComputerAccById(id: number) {
    return this.data.computerAccs.filter(m => m.id === id);
  }
  getAllWashingMachines() {
    return this.data.washingMachines;
  }
  getWashingMachineById(id: number) {
    return this.data.washingMachines.filter(m => m.id === id);
  }
  getAllRefrigerators() {
    return this.data.refrigerators;
  }
  getRefrigeratorById(id: number) {
    return this.data.refrigerators.filter(m => m.id === id);
  }
  getAllAirConditioners() {
    return this.data.airConditioners;
  }
  getAirConditionerById(id: number) {
    return this.data.airConditioners.filter(m => m.id === id);
  }
  getAllFootWears() {
    return this.data.footWears;
  }
  getFootWearById(id: number) {
    return this.data.footWears.filter(m => m.id === id);
  }
  getAllBottomWears() {
    return this.data.bottomWears;
  }
  getBottomWearById(id: number) {
    return this.data.bottomWears.filter(m => m.id === id);
  }
  getAllWinterWears() {
    return this.data.winterWears;
  }
  getWinterWearById(id: number) {
    return this.data.winterWears.filter(m => m.id === id);
  }
  getAllBoysWatches() {
    return this.data.boyswatches;
  }
  getBoysWatchById(id: number) {
    return this.data.boyswatches.filter(m => m.id === id);
  }
  getAllEthnicWears() {
    return this.data.ethnicWears;
  }
  getEthnicWearById(id: number) {
    return this.data.ethnicWears.filter(m => m.id === id);
  }
  getAllSandals() {
    return this.data.sandals;
  }
  getSandalById(id: number) {
    return this.data.sandals.filter(m => m.id === id);
  }
  getAllJwellerry() {
    return this.data.jwellerry;
  }
  getJwellById(id: number) {
    return this.data.jwellerry.filter(m => m.id === id);
  }
  getAllWatches() {
    return this.data.watches;
  }
  getWatchById(id: number) {
    return this.data.watches.filter(m => m.id === id);
  }
  getAllClothing() {
    return this.data.clothing;
  }
  getClothById(id: number) {
    return this.data.clothing.filter(m => m.id === id);
  }
  getAllBabyFootwears() {
    return this.data.babyFootwears;
  }
  getBabyFootwearById(id: number) {
    return this.data.babyFootwears.filter(m => m.id === id);
  }
  getAllToys() {
    return this.data.toys;
  }
  getToyById(id: number) {
    return this.data.toys.filter(m => m.id === id);
  }
  getAllSofas() {
    return this.data.sofas;
  }
  getSofaById(id: number) {
    return this.data.sofas.filter(m => m.id === id);
  }
  getAllBeds() {
    return this.data.beds;
  }
  getBedById(id: number) {
    return this.data.beds.filter(m => m.id === id);
  }
  getAllClocks() {
    return this.data.clocks;
  }
  getClocksById(id: number) {
    return this.data.clocks.filter(m => m.id === id);
  }
  getAllSports() {
    return this.data.sports;
  }
  getSportById(id: number) {
    return this.data.sports.filter(m => m.id === id);
  }
  getAllBooks() {
    return this.data.books;
  }
  getBookById(id: number) {
    return this.data.books.filter(m => m.id === id);
  }
}
