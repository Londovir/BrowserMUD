import { Component, OnInit } from '@angular/core';

import { MazeService } from 'src/service/maze/maze.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    Maze: number[][];

  constructor(private mazeService: MazeService) { }

  ngOnInit() {
      const newmaze = this.mazeService.CreateMaze(30, 30);

      this.Maze = newmaze;
  }

}
