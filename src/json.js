export const json = {
 "title": "CAPI Transformations UI",
 "description": "Enrich, Filter, Clone your events without any coding",
 "completedHtml": "<h3>Your transformations were successfully updated</h3>",
 "pages": [
  {
   "name": "capi_transformation_config",
   "elements": [
    {
     "type": "text",
     "name": "pixel_id",
     "title": "Pixel ID",
     "hideNumber": true
    },
    {
     "type": "paneldynamic",
     "name": "transformations",
     "title": "Transformations",
     "hideNumber": true,
     "templateElements": [
      {
       "type": "panel",
       "name": "Action",
       "elements": [
        {
         "type": "dropdown",
         "name": "action",
         "title": "Action",
         "isRequired": true,
         "choices": [
          {
           "value": "exclude_event",
           "text": "Exclude event"
          },
          {
           "value": "clone_event",
           "text": "Clone Event"
          },
          {
           "value": "exclude_parameters",
           "text": "Exclude parameters"
          },
          {
           "value": "edit_parameters",
           "text": "Edit parameters"
          },
          {
           "value": "add_parameters",
           "text": "Add parameters"
          },
          {
           "value": "enrich_pii_from_database",
           "text": "Enrich PII from database"
          },
          {
           "value": "enrich_ip_geo_info",
           "text": "Enrich IP Geo infos"
          },
          {
           "value": "enrich_custom_data_from_database",
           "text": "Enrich custom data from database"
          }
         ]
        },
        {
         "type": "text",
         "name": "new_event_name",
         "visibleIf": "{panel.action} = 'clone_event'",
         "title": "New event name",
         "isRequired": true
        },
        {
         "type": "matrixdynamic",
         "name": "exclude_parameters_input",
         "visibleIf": "{panel.action} = 'exclude_parameters'",
         "title": "Parameters to exclude",
         "isRequired": true,
         "columns": [
          {
           "name": "key",
           "title": "Name",
           "cellType": "text",
           "isRequired": true,
           "defaultValueExpression": "event['custom_data']['test']"
          }
         ],
         "choices": [
          1,
          2,
          3,
          4,
          5
         ],
         "rowCount": 1
        },
        {
         "type": "matrixdynamic",
         "name": "edit_parameters_input",
         "visibleIf": "{panel.action} = 'edit_parameters'",
         "title": "Parameters to edit",
         "isRequired": true,
         "columns": [
          {
           "name": "key",
           "title": "Name",
           "cellType": "text",
           "isRequired": true
          },
          {
           "name": "value",
           "title": "Value",
           "cellType": "text",
           "isRequired": true
          }
         ],
         "choices": [
          1,
          2,
          3,
          4,
          5
         ],
         "rowCount": 1
        },
        {
         "type": "matrixdynamic",
         "name": "add_parameters_input",
         "visibleIf": "{panel.action} = 'add_parameters'",
         "title": "Parameters to add",
         "isRequired": true,
         "columns": [
          {
           "name": "key",
           "title": "Name",
           "cellType": "text",
           "isRequired": true
          },
          {
           "name": "value",
           "title": "Value",
           "cellType": "text",
           "isRequired": true
          }
         ],
         "choices": [
          1,
          2,
          3,
          4,
          5
         ],
         "rowCount": 1
        }
       ]
      },
      {
       "type": "panel",
       "name": "Condition",
       "elements": [
        {
         "type": "radiogroup",
         "name": "matching_condition",
         "title": "Matching Condition",
         "isRequired": true,
         "choices": [
          {
           "value": "always",
           "text": "Always apply"
          },
          {
           "value": "conditionally",
           "text": "Conditionally apply"
          }
         ]
        },
        {
         "type": "matrixdynamic",
         "name": "conditions",
         "visibleIf": "{panel.matching_condition} = 'conditionally'",
         "title": "Condition",
         "isRequired": true,
         "columns": [
          {
           "name": "key",
           "title": "Parameter name",
           "cellType": "text"
          },
          {
           "name": "condition",
           "title": "Condition",
           "cellType": "dropdown",
           "choices": [
            "equals",
            {
             "value": "matches_regex",
             "text": "matches RegEx"
            },
            "contains",
            {
             "value": "does_not_equal",
             "text": "does not equal"
            },
            "does_not_contain",
            {
             "value": "less_than",
             "text": "less than"
            },
            {
             "value": "greater_than",
             "text": "greater than"
            }
           ]
          },
          {
           "name": "value",
           "title": "Value",
           "cellType": "text"
          }
         ],
         "rowCount": 1
        }
       ]
      }
     ],
     "maxPanelCount": 10,
     "panelsState": "collapsed",
     "confirmDelete": true,
     "confirmDeleteText": "Do you want to delete the transformation?",
     "showRangeInProgress": false
    }
   ]
  }
 ]
}
