import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { EmployeeService } from 'src/app/service/employee.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartData: any;
  labelData: any [] = [];
  realData: any [] = [];

  constructor(
    private service:EmployeeService
  ) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(result => {
      this.chartData = result;
      if(this.chartData != null){
        for(let i=0; i<this.chartData.length; i++){
          // console.log(this.chartData[i]);
          this.labelData.push(this.chartData[i].name);
          this.realData.push(this.chartData[i].salaryPerMonth);
          // this.realData.push(this.chartData[i].workDays);
        }
        this.RenderChart(this.labelData,this.realData, 'bar','barChart');
        this.RenderChart(this.labelData,this.realData, 'pie','pieChart');
        this.RenderChart(this.labelData,this.realData, 'doughnut','doughnutChart');
        this.RenderChart(this.labelData,this.realData, 'polarArea','polarChart');
        this.RenderChart(this.labelData,this.realData, 'radar','radarChart');
      }
    });
  }

  RenderChart(labelData:any, realData:any, type:any, id:any) {
    const myChart = new Chart(id, {
    type: type,
    data: {
      labels: labelData,
      datasets: [{
        label: 'Salary per Month',
        data: realData,
        backgroundColor: ['rgba(255, 99, 132, 0.9)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }


}
