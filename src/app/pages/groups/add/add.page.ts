import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, IonSlides, LoadingController, Platform, ToastController } from '@ionic/angular';
import { GroupService } from 'src/app/services/group.service';
import { AuthenticationService } from 'src/app/services/helpers/authentication.service';
import { Contact } from 'src/app/services/models/contact';
import { Group } from 'src/app/services/models/group';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-group',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddGroupPage implements OnInit, AfterViewInit {
  authUser: firebase.User;
  group = new Group();
  private members: Contact[] = [];

  groupDetails: FormGroup;
  error_messages = environment.error_messages;

  loader: any;
  toast: any;

  @ViewChild('slides') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private router: Router,
    public platform: Platform,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private authenticationService: AuthenticationService,
    private groupService: GroupService,
    public _sanitizer: DomSanitizer,
    private camera: Camera,
    public toastController: ToastController,
    public loadingController: LoadingController,
  ) {
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  ngOnInit() {
    this.getUser();
    this.createFormGroup();
    this.init();

    this.group.picture = environment.group_picture_placeholder;
  }

  getUser() {
    this.authUser = this.authenticationService.getUserAuth();
  }

  createFormGroup() {
    this.groupDetails = this.formBuilder.group({
      groupName: new FormControl('', {
        validators: Validators.compose([
          Validators.required
        ]), updateOn: 'change'
      })
    });
  }

  init() {
    setTimeout(async () => {
      this.loader = await this.loadingController.create({
        spinner: 'crescent',
        message: 'Creating group...',
        translucent: true,
        backdropDismiss: false,
        showBackdrop: true,
        keyboardClose: true
      });
      this.toast = await this.toastController.create({
        message: '',
        duration: 5000,
        position: 'bottom'
      });
    }, 0);
  }

  nextSlide() {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext(400);
    this.slides.lockSwipeToNext(true);
  }

  prevSlide() {
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev(400);
    this.slides.lockSwipeToPrev(true);
  }

  setContacts(event: any) {
    this.members = event;
  }

  async submit() {
    await this.loader.present();

    // Set properties
    this.group.name = this.groupDetails.controls.groupName.value;
    this.group.createdBy = this.authUser.uid;
    this.group.picture == '' ? environment.group_picture_placeholder : this.group.picture;

    this.groupService.addGroup(this.group).then(async (response) => {
      if (typeof response !== 'boolean') {
        this.addUserToGroup(response.id, this.authUser.uid);

        // Add selected contacts to group
        for (let index = 0; index < this.members.length; index++) {
          const member = this.members[index];
          this.addUserToGroup(response.id, member.id);
        }

        this.loadingController.dismiss();

        // Show toast
        if (response) {
          this.toast.message = 'Group was successfully created!';
          this.toast.onDidDismiss().then(() => setTimeout(() => { this.router.navigate(['home']); }, 2000));

          await this.toast.present();
        }
      }
    });
  }

  addUserToGroup(groupId: string, uid: string) {
    this.groupService.addMember(groupId, uid);
  }

  async uploadAvatar() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      correctOrientation: true
    };

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.camera.getPicture(options).then(
          (imageData) => {
            let base64Image = "data:image/jpeg;base64," + imageData;
            this.group.picture = base64Image;
          }, async (error) => {
            this.toast.message = 'Could not upload image. Please try again!';
            await this.toast.present();
          });
      }
    });
  }
}
