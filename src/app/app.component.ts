import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 12 in Depth', 'https://www.reddit.com/r/angular/comments/nc7tql/angular_12_in_depth/', 3),
      new Article('Build a form from object class variables', 'https://www.reddit.com/r/angular/comments/pgstk9/build_a_form_from_object_class_variables/', 2),
      new Article('Angular for web + Android Native?', 'https://www.reddit.com/r/angular/comments/peix14/angular_for_web_android_native/', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
