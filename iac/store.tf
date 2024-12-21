terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

# Cloudflare provider configuration
provider "cloudflare" {
  api_token = var.cloudflare_api_token # Replace with your Cloudflare API token
}

# Define R2 bucket
resource "cloudflare_r2_bucket" "media_bucket" {
  account_id = var.cloudflare_account_id  # Cloudflare Account ID
  name       = "strapi-media"             # Bucket name for storing media files
  # region     = "auto"                   # Default region
  # location   = "enam"
}

# Define R2 access keys for the bucket
resource "cloudflare_access_key" "r2_access_key" {
  account_id = var.cloudflare_account_id
  name       = "r2-strapi-access-key" # Name of the access key
}

# Outputs for access keys
output "r2_access_key_id" {
  value = cloudflare_access_key.r2_access_key.access_key
  description = "Access key ID for the R2 bucket"
  sensitive   = true
}

output "r2_secret_access_key" {
  value = cloudflare_access_key.r2_access_key.secret_access_key
  description = "Secret access key for the R2 bucket"
  sensitive   = true
}

# Outputs for integration
output "r2_bucket_name" {
  value = cloudflare_r2_bucket.media_bucket.name
  description = "Name of the R2 bucket for media storage"
}

output "r2_bucket_id" {
  value = cloudflare_r2_bucket.media_bucket.id
  description = "ID of the R2 bucket for media storage"
}

# Variables definition
variable "cloudflare_api_token" {
  description = "Cloudflare API token with permissions to manage R2 buckets"
  type        = string
}

variable "cloudflare_account_id" {
  description = "Your Cloudflare account ID"
  type        = string
}
