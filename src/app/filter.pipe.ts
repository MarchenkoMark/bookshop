import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: IBook[], sortingId: number): IBook[] {
    console.log("pipe: " + sortingId);
    console.log(books[1].title);
    if (sortingId == 0) {
      return this.defaultOrder(books);
    } else if(sortingId == 1) {
      return this.increasePrice(books);
    } else if (sortingId == 2) {
      return this.decreasePrice(books);
    }
  }

  defaultOrder(books: IBook[]) : IBook[] {
    let newArr: IBook[] = new Array(books.length);
    for (let book of books){
      newArr[book.id] = book;
    }
    return newArr;
  }

  //Worst ever sorting algorithm
  increasePrice(books: IBook[]) : IBook[] {
    let newArr: IBook[] = books;
    let swapped: boolean;
    do {
      swapped = false;
      for (let i: number = 1; i < newArr.length; i++) {
        if (newArr[i-1].price > newArr[i].price) {
          this.swap(newArr, i-1, i);
          swapped = true;
        }
      }
    } while (swapped == true);
    return newArr;
  }

  //Worst ever sorting algorithm that does not use the previous one
  decreasePrice(books: IBook[]) : IBook[] {
    let newArr: IBook[] = books;
    let swapped: boolean;
    do {
      swapped = false;
      for (let i: number = 1; i < newArr.length; i++) {
        if (newArr[i-1].price < newArr[i].price) {
          this.swap(newArr, i-1, i);
          swapped = true;
        }
      }
    } while (swapped == true);
    return newArr;
  }

  swap(arr: IBook[], first: number, second: number) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
}
