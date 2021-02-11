import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../../common/services';
import { DistrictInfo } from '../../shared/interfaces';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  public districtTitle = 'Districts List of Bangladesh';
  public districtList: DistrictInfo[] =  [];
  public deletedDistrictList: DistrictInfo[] = [];
  public numberOfDistrict = 0;
  public numberOfDeletedDistrict = 0;
  constructor(private districtService: DistrictService, private titleService: Title, public dialog: MatDialog) {
    this.titleService.setTitle('District Lists of Bangladesh');
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void{
    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.districtList = this.getRectifiedDistrict(res.data);
        this.setNumberOfDistrict(this.districtList);
      }
      else {
        console.error('Error', res);
      }
    });
  }

  // get rectified districts
  private getRectifiedDistrict(districtList: DistrictInfo[]): DistrictInfo[]{
    for (const dist of districtList) {
      dist.density = Math.floor(dist.population / dist.areaSqKm);
    }
    return districtList;
  }

  private setNumberOfDistrict(arr: DistrictInfo[]): void {
    this.numberOfDistrict = arr.length;
  }

  public reCount(rowNumber: number): void {
    const dialogRef = this.dialog.open(DialogComponent , {
      width: '500px',
      data: {
        title: 'Delete Confirmation',
        body: 'Are you sure to delete?'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res === 'yes'){
        this.deleteTableRowByIndex(rowNumber);
      }
    });

  }

  private deleteTableRowByIndex(index: number): void{
    this.addToDeletedList(index);
    this.districtList.splice(index, 1);
    this.numberOfDistrict = this.districtList.length;
  }

  private addToDeletedList(index: number): void{
    this.deletedDistrictList.push(this.districtList[index]);
    this.numberOfDeletedDistrict = this.deletedDistrictList.length;
  }

}
