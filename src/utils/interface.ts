export interface IApplicationForm {
    data: {
      id: string;
      type: string;
      attributes: IApplicationFormAttributes;
    };
  }
  
  export interface IApplicationFormAttributes {
    coverImage?: string;
    personalInformation: {
      firstName: IPersonalInformationTemplate;
      lastName: IPersonalInformationTemplate;
      emailId: IPersonalInformationTemplate;
      phoneNumber: IPersonalInformationTemplate;
      nationality: IPersonalInformationTemplate;
      currentResidence: IPersonalInformationTemplate;
      idNumber: IPersonalInformationTemplate;
      dateOfBirth: IPersonalInformationTemplate;
      gender: IPersonalInformationTemplate;
      personalQuestions?: IQuestionTemplate[];
    };
    profile: {
      education: IProfileTemplate;
      experience: IProfileTemplate;
      resume: IProfileTemplate;
      profileQuestions?: IQuestionTemplate[];
    };
    customisedQuestions?: IQuestionTemplate[];
  }
  
  export interface IPersonalInformationTemplate {
    internalUse: boolean;
    show: boolean;
  }
  
  export interface IProfileTemplate {
    mandatory: boolean;
    show: boolean;
  }
  
  export interface IQuestionTemplate {
    id?: string;
    type:
      | 'Paragraph'
      | 'ShortAnswer'
      | 'YesNo'
      | 'Dropdown'
      | 'MultipleChoice'
      | 'Date'
      | 'Number'
      | 'FileUpload';
    question: string;
    choices?: string[];
    maxChoice?: number;
    disqualify?: boolean;
    other?: boolean;
  }