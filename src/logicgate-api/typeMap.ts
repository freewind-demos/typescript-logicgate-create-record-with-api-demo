import {AccessAudit} from './AccessAudit';
import {CurrentValue} from './CurrentValue';
import {Field} from './Field';
import {FieldInput} from './FieldInput';
import {FieldInputResult} from './FieldInputResult';
import {FilteredRecord} from './FilteredRecord';
import {GraphEntity} from './GraphEntity';
import {ImportRecordRequest} from './ImportRecordRequest';
import {ImportRequest} from './ImportRequest';
import {ImportUserRequest} from './ImportUserRequest';
import {InputStream} from './InputStream';
import {LabelValue} from './LabelValue';
import {Layout} from './Layout';
import {LayoutField} from './LayoutField';
import {Locked} from './Locked';
import {LogIn} from './LogIn';
import {LogInFail} from './LogInFail';
import {LogOut} from './LogOut';
import {ManyToMany} from './ManyToMany';
import {ManyToOne} from './ManyToOne';
import {ModelDefault} from './ModelDefault';
import {ModelFile} from './ModelFile';
import {Module} from './Module';
import {ModuleEntitlement} from './ModuleEntitlement';
import {MultiSelect} from './MultiSelect';
import {Number} from './Number';
import {OneToMany} from './OneToMany';
import {OneToOne} from './OneToOne';
import {Origin} from './Origin';
import {PageOfCurrentValue} from './PageOfCurrentValue';
import {PageOfField} from './PageOfField';
import {PageOfWorkflowResult} from './PageOfWorkflowResult';
import {PendingAttachment} from './PendingAttachment';
import {Process} from './Process';
import {Radio} from './Radio';
import {Record} from './Record';
import {RecordDetails} from './RecordDetails';
import {RecordProperty} from './RecordProperty';
import {ReportFilter} from './ReportFilter';
import {Repository} from './Repository';
import {Resource} from './Resource';
import {Role} from './Role';
import {Select} from './Select';
import {ServiceLevelAgreement} from './ServiceLevelAgreement';
import {Sort} from './Sort';
import {Step} from './Step';
import {StepEntitlement} from './StepEntitlement';
import {TableReport} from './TableReport';
import {TableReportJoin} from './TableReportJoin';
import {Text} from './Text';
import {TextArea} from './TextArea';
import {URI} from './URI';
import {URL} from './URL';
import {URLStreamHandler} from './URLStreamHandler';
import {Active} from './Active';
import {Attachment} from './Attachment';
import {Calculation} from './Calculation';
import {Chain} from './Chain';
import {Checkbox} from './Checkbox';
import {ChildResult} from './ChildResult';
import {CleanAttachment} from './CleanAttachment';
import {CurrentCommonValue} from './CurrentCommonValue';
import {CurrentDateRangeValue} from './CurrentDateRangeValue';
import {CurrentDateValue} from './CurrentDateValue';
import {DueDate} from './DueDate';
import {Display} from './Display';
import {Disabled} from './Disabled';
import {DirtyAttachment} from './DirtyAttachment';
import {DatePicker} from './DatePicker';
import {ESignature} from './ESignature';
import {End} from './End';
import {External} from './External';
import {User} from './User';
import {UserGroup} from './UserGroup';
import {ValueMap} from './ValueMap';
import {Workflow} from './Workflow';
import {WorkflowMap} from './WorkflowMap';
import {WorkflowResult} from './WorkflowResult';
import {WorkflowSequence} from './WorkflowSequence';

export const typeMap: {[index: string]: any} = {
  "AccessAudit": AccessAudit,
  "Active": Active,
  "Attachment": Attachment,
  "Calculation": Calculation,
  "Chain": Chain,
  "Checkbox": Checkbox,
  "ChildResult": ChildResult,
  "CleanAttachment": CleanAttachment,
  "CurrentCommonValue": CurrentCommonValue,
  "CurrentDateRangeValue": CurrentDateRangeValue,
  "CurrentDateValue": CurrentDateValue,
  "CurrentValue": CurrentValue,
  "DatePicker": DatePicker,
  "DirtyAttachment": DirtyAttachment,
  "Disabled": Disabled,
  "Display": Display,
  "DueDate": DueDate,
  "ESignature": ESignature,
  "End": End,
  "External": External,
  "Field": Field,
  "FieldInput": FieldInput,
  "FieldInputResult": FieldInputResult,
  "FilteredRecord": FilteredRecord,
  "GraphEntity": GraphEntity,
  "ImportRecordRequest": ImportRecordRequest,
  "ImportRequest": ImportRequest,
  "ImportUserRequest": ImportUserRequest,
  "InputStream": InputStream,
  "LabelValue": LabelValue,
  "Layout": Layout,
  "LayoutField": LayoutField,
  "Locked": Locked,
  "LogIn": LogIn,
  "LogInFail": LogInFail,
  "LogOut": LogOut,
  "ManyToMany": ManyToMany,
  "ManyToOne": ManyToOne,
  "ModelDefault": ModelDefault,
  "ModelFile": ModelFile,
  "Module": Module,
  "ModuleEntitlement": ModuleEntitlement,
  "MultiSelect": MultiSelect,
  "Number": Number,
  "OneToMany": OneToMany,
  "OneToOne": OneToOne,
  "Origin": Origin,
  "PageOfCurrentValue": PageOfCurrentValue,
  "PageOfField": PageOfField,
  "PageOfWorkflowResult": PageOfWorkflowResult,
  "PendingAttachment": PendingAttachment,
  "Process": Process,
  "Radio": Radio,
  "Record": Record,
  "RecordDetails": RecordDetails,
  "RecordProperty": RecordProperty,
  "ReportFilter": ReportFilter,
  "Repository": Repository,
  "Resource": Resource,
  "Role": Role,
  "Select": Select,
  "ServiceLevelAgreement": ServiceLevelAgreement,
  "Sort": Sort,
  "Step": Step,
  "StepEntitlement": StepEntitlement,
  "TableReport": TableReport,
  "TableReportJoin": TableReportJoin,
  "Text": Text,
  "TextArea": TextArea,
  "URI": URI,
  "URL": URL,
  "URLStreamHandler": URLStreamHandler,
  "User": User,
  "UserGroup": UserGroup,
  "ValueMap": ValueMap,
  "Workflow": Workflow,
  "WorkflowMap": WorkflowMap,
  "WorkflowResult": WorkflowResult,
  "WorkflowSequence": WorkflowSequence,
}
