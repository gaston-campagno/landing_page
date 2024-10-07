# variables.tf
variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-2"
}

variable "vpc_id" {
  description = "The ID of the VPC where the instance will be deployed"
  type        = string
  default     = "vpc-0ec8ae419af17fdad"
}

variable "instance_type" {
  description = "Type of EC2 instance"
  type        = string
  default     = "t3.medium"
}

variable "ami_id" {
  description = "AMI ID for Ubuntu Server 20.04"
  type        = string
  default     = "ami-0862be96e41dcbf74"
}

variable "instance_name" {
  description = "Name for the EC2 instance"
  default     = "MyEC2Instance_2"
}

variable "security_group_name" {
  description = "Name for the security group"
  default     = "MyEC2Instance_2"
}

variable "user_data_script" {
  description = "User data script to be run on instance startup"
  type        = list(string)
  default     = ["docker.sh"] # Nombre del script que estará en el repo de scripts
}

variable "github_token" {
  type    = string
  default = ""
}

variable "ssh_key" {
  type    = string
  default = "my-ssh-key_1"
}