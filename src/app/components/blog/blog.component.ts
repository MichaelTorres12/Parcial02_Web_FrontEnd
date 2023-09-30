import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  blogItems: any = []; // Define un arreglo para almacenar los datos

  ngOnInit(): void {
    this.blogService.findAll().subscribe(data => {
      this.blogItems = data; // Asigna los datos al arreglo
    });
  }
}
